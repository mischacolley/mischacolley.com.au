/**
 * The surface Yarn Chat puts on `window`, declared here because the widget is
 * loaded by a plain script tag and so brings no types with it.
 *
 * Optional on purpose: the script is deferred and may never load, which is
 * exactly why ContactFab keeps its `mailto:` and checks `ready()` before
 * taking the click.
 */
interface YarnWidget {
  open(): void;
  close(): void;
  toggle(): void;
  /** True once the widget has its configuration and can be opened. */
  ready(): boolean;
}

interface Window {
  Yarn?: YarnWidget;
}
