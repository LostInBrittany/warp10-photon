import { LitElement, html } from '@polymer/lit-element';

import '@photon-elements/photon-ide-elements/photon-query-editor';

/**
 * @customElement
 * @polymer
 */
class PhotonApp extends LitElement {
  _render({debug}) {
    return html`
      <photon-query-editor confPath='/photon-conf.yaml' debug?='${debug}'></photon-query-editor>
    `;
  }

  static get properties() {
    return {
      debug: Boolean,
    };
  }
}

window.customElements.define('photon-app', PhotonApp);
