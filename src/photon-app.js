import { LitElement, html } from '@polymer/lit-element';

import '@photon-elements/photon-ide-elements/photon-query';

/**
 * @customElement
 * @polymer
 */
class PhotonApp extends LitElement {
  render() {
    return html`
      <photon-query confPath='photon-conf.yaml' ?debug=${this.debug}></photon-query>
    `;
  }

  static get properties() {
    return {
      debug: Boolean,
    };
  }
}

window.customElements.define('photon-app', PhotonApp);
