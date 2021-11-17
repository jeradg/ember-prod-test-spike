import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | this-breaks', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<ThisBreaks />`);

    assert.equal(this.element.textContent.trim(), 'this is just a test\n\n\n\nEnvironment: test');
  });
});
