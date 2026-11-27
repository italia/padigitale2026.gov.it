import "bootstrap-italia";

declare module "bootstrap-italia" {
  // Bootstrap Italia 2.18.3 exports this plugin at runtime without a declaration.
  export class AcceptOverlay {
    constructor(element: HTMLElement, options: { service: string });
    dispose(): void;
  }
}

declare module "bootstrap-italia/types/plugins/sticky" {
  export namespace Sticky {
    function getOrCreateInstance(element: HTMLElement): Sticky;
  }
}
