
import * as tf from '@tensorflow/tfjs';
import * as speechCommands from './speechcommands';
import { callCallback } from './utils/index';

const MODEL_OPTIONS = ['speechcommands18w'];
class SoundClassifier {
  constructor(modelNameOrUrl, options, callback) {
    this.model = null;
    this.options = options;
    if (typeof modelNameOrUrl === 'string') {
      if (MODEL_OPTIONS.includes(modelNameOrUrl)) {
        this.modelName = modelNameOrUrl;
        this.modelUrl = null;
        switch (this.modelName) {
          case 'speechcommands18w':
            this.modelToUse = speechCommands;
            break;
          default:
            this.modelToUse = null;
        }
      } else {
        // Default to speechCommands for now
        this.modelToUse = speechCommands;
        this.modelUrl = modelNameOrUrl;
      }
    }
    // Load the model
    this.ready = callCallback(this.loadModel(options, this.modelUrl), callback);
  }

  async loadModel(options) {
    this.model = await this.modelToUse.load(options, this.modelUrl);
    return this;
  }

  async classifyInternal(numberOfClasses, callback) {
    // Wait for the model to be ready
    await this.ready;
    await tf.nextFrame();

    return this.model.classify(numberOfClasses, callback);
  }

  async classify(numOrCallback = null, cb) {
    let numberOfClasses = this.topk;
    let callback;

    if (typeof numOrCallback === 'number') {
      numberOfClasses = numOrCallback;
    } else if (typeof numOrCallback === 'function') {
      callback = numOrCallback;
    }

    if (typeof cb === 'function') {
      callback = cb;
    }
    return this.classifyInternal(numberOfClasses, callback);
  }
}

const soundClassifier = (modelName, optionsOrCallback, cb) => {
  let options = {};
  let callback = cb;

  let model = modelName;
  if (typeof model !== 'string') {
    throw new Error('Please specify a model to use. E.g: "SpeechCommands18w"');
  } else if (model.indexOf('http') === -1) {
    model = modelName.toLowerCase();
  }

  if (typeof optionsOrCallback === 'object') {
    options = optionsOrCallback;
  } else if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
  }

  const instance = new SoundClassifier(model, options, callback);
  return callback ? instance : instance.ready;
};

export default soundClassifier;
