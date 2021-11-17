import Application from 'prod-test-spike/app';
import config from 'prod-test-spike/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
