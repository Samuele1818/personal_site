export const THEMES = [
/* {
  id: 'night-owl',
  style: (
   <style jsx>{`
    :global(.cm-s-night-owl) {
     text-rendering: optimizeLegibility;
     font-size: 14px;
     font-family: 'Fira Code', monospace !important;
    }

    :global(.CodeMirror-selected) {
     background: #1d3b53 !important;
    }

    :global(.react-codemirror2 > .CodeMirror) {
     padding-top: 48px;
     background: #011627;
    }

    :global(.CodeMirror-gutters) {
     border-right: unset !important;
    }

    :global(.cm-s-night-owl span.cm-keyword) {
     line-height: 1em;
     font-style: italic;
     color: #c792ea;
    }

    :global(.cm-s-night-owl span.cm-atom) {
     color: #6c8cd5;
    }

    :global(.cm-s-night-owl span.cm-number) {
     color: #f78c6c;
    }

    :global(.cm-s-night-owl span.cm-def) {
     color: rgb(173, 219, 103);
     text-decoration: underline;
    }

    :global(.cm-s-night-owl span.cm-variable) {
     color: rgb(214, 222, 235);
    }

    :global(.cm-s-night-owl span.cm-variable-2) {
     color: rgb(214, 222, 235);
    }

    :global(.cm-s-night-owl span.cm-variable-3) {
     color: rgb(214, 222, 235);
    }

    :global(.cm-s-night-owl span.cm-property) {
     color: rgb(128, 203, 196);
    }

    :global(.cm-s-night-owl span.cm-comment) {
     color: #637777;
     font-style: italic;
    }

    :global(.cm-s-night-owl span.cm-string) {
     color: #ecc48d;
    }

    :global(.cm-s-night-owl span.cm-meta) {
     color: yellow;
    }

    :global(.cm-s-night-owl span.cm-qualifier) {
     color: grey;
    }

    :global(.cm-s-night-owl span.cm-builtin) {
     color: #7ea656;
    }

    /!*    :global(.cm-s-night-owl span.cm-bracket) {
                                       color: #ffffff;
                                      }*!/

    :global(.cm-s-night-owl span.cm-tag) {
     color: #ff6363;
    }

    :global(.cm-s-night-owl span.cm-attribute) {
     color: #7f007f;
    }

    :global(.cm-s-night-owl span.cm-error) {
     color: #ef5350;
    }

    :global(.cm-s-night-owl span.cm-punctuation) {
     color: #ffffff;
    }

    :global(.cm-s-night-owl .CodeMirror-cursor) {
     border-left: 1px solid #80a4c2;
    }

    :global(.cm-s-night-owl .CodeMirror-gutter) {
     background: #011627;
     color: #d6deeb;
    }

    :global(.cm-s-night-owl .CodeMirror-lines) {
     background: #011627;
    }

    :global(.cm-s-night-owl .CodeMirror-scroll) {
     background: #011627;
    }

    :global(.cm-s-night-owl
      .CodeMirror-activeline-background) {
     background: #e8f2ff;
    }

    :global(.cm-s-night-owl
      .CodeMirror-matchingbracket) {
     outline: none;
     background: #5f7e974d;
    }

    :global(.cm-s-night-owl .CodeMirror-lines) {
     color: #abb2bf;
    }

    :global(.cm-s-night-owl .CodeMirror-cursor) {
     border-left: 2px solid #7e57c2 !important;
    }
   `}</style>
  ),
 },*/
 {
  id: 'one-light',
  style: (
   <style jsx>{`
    :global(.cm-s-one-light) {
     text-rendering: optimizeLegibility;
     font-family: 'Fira Code', monospace !important;
     font-size: 10px;
    }

    :global(.CodeMirror-selected) {
     background: #1d3b53 !important;
    }

    :global(.react-codemirror2 > .CodeMirror) {
     padding-top: 36px;
     background: #fff;
    }

    :global(.CodeMirror-gutters) {
     border-right: unset !important;
    }

    :global(.cm-s-one-light span.cm-keyword) {
     line-height: 1em;
     font-style: italic;
     color: rgb(166, 38, 164) !important;
    }

    :global(.cm-s-one-light span.cm-atom) {
     color: #6c8cd5;
    }

    :global(.cm-s-one-light span.cm-operator) {
     color: rgb(1, 132, 188) !important;
    }

    :global(.cm-s-one-light span.cm-number) {
     color: rgb(152, 104, 1) !important;
    }

    :global(.cm-s-one-light span.cm-def) {
     color: rgb(173, 219, 103);
     text-decoration: underline;
    }

    :global(.cm-s-one-light span.cm-variable) {
     color: rgb(224, 108, 117) !important;
    }

    :global(.cm-s-one-light span.cm-variable-2) {
     color: rgb(224, 108, 117);
    }

    :global(.cm-s-one-light span.cm-variable-3) {
     color: rgb(224, 108, 117);
    }

    :global(.cm-s-one-light span.cm-property) {
     color: rgb(128, 203, 196);
    }

    :global(.cm-s-one-light span.cm-comment) {
     color: #637777;
     font-style: italic;
    }

    :global(.cm-s-one-light span.cm-string) {
     color: #ecc48d;
    }

    :global(.cm-s-one-light span.cm-meta) {
     color: yellow;
    }

    :global(.cm-s-one-light span.cm-qualifier) {
     color: grey;
    }

    :global(.cm-s-one-light span.cm-builtin) {
     color: #7ea656;
    }

    /*    :global(.cm-s-night-owl span.cm-bracket) {
                                       color: #ffffff;
                                      }*/

    :global(.cm-s-one-light span.cm-tag) {
     color: #ff6363;
    }

    :global(.cm-s-one-light span.cm-attribute) {
     color: #7f007f;
    }

    :global(.cm-s-one-light span.cm-error) {
     color: #ef5350;
    }

    :global(.cm-s-one-light span.cm-punctuation) {
     color: #ffffff;
    }

    :global(.cm-s-one-light .CodeMirror-cursor) {
     border-left: 1px solid #80a4c2;
    }

    :global(.cm-s-one-light .CodeMirror-gutter) {
     background: #fff;
     color: #d6deeb;
    }

    :global(.cm-s-one-light .CodeMirror-lines) {
     background: #fff;
    }

    :global(.cm-s-one-light .CodeMirror-scroll) {
     background: #fff;
    }

    :global(.cm-s-one-light
      .CodeMirror-activeline-background) {
     background: #fff;
    }

    :global(.cm-s-one-light
      .CodeMirror-matchingbracket) {
     outline: none;
     background: #5f7e974d;
    }

    :global(.cm-s-one-light .CodeMirror-lines) {
     color: #27292f !important;
    }

    :global(.cm-s-one-light .CodeMirror-cursor) {
     border-left: 2px solid #526fff !important;
    }
   `}</style>
  ),
 },
]
