export const THEMES = [
 {
  id: 'night-owl',
  style: (
   <style jsx>{`
    :global(.cm-s-night-owl) {
     text-rendering: optimizeLegibility;
     font-family: 'Droid Sans Mono',
      sans-serif;
     font-size: 14px;
    }

    :global(.CodeMirror-selected) {
     background: #1d3b53 !important;
    }

    :global(.react-codemirror2
      > .CodeMirror) {
     padding-top: 48px;
     background: #011627;
     border-radius: 0.5rem;
    }

    :global(.CodeMirror-gutters) {
     border-right: unset !important;
    }

    :global(.cm-s-night-owl
      span.cm-keyword) {
     line-height: 1em;
     font-style: italic;
     color: #c792ea;
    }

    :global(.cm-s-night-owl
      span.cm-atom) {
     color: #6c8cd5;
    }

    :global(.cm-s-night-owl
      span.cm-number) {
     color: #f78c6c;
    }

    :global(.cm-s-night-owl
      span.cm-def) {
     color: rgb(173, 219, 103);
     text-decoration: underline;
    }

    :global(.cm-s-night-owl
      span.cm-variable) {
     color: rgb(214, 222, 235);
    }

    :global(.cm-s-night-owl
      span.cm-variable-2) {
     color: rgb(214, 222, 235);
    }

    :global(.cm-s-night-owl
      span.cm-variable-3) {
     color: rgb(214, 222, 235);
    }

    :global(.cm-s-night-owl
      span.cm-property) {
     color: rgb(128, 203, 196);
    }

    :global(.cm-s-night-owl
      span.cm-comment) {
     color: #637777;
     font-style: italic;
    }

    :global(.cm-s-night-owl
      span.cm-string) {
     color: #ecc48d;
    }

    :global(.cm-s-night-owl
      span.cm-meta) {
     color: yellow;
    }

    :global(.cm-s-night-owl
      span.cm-qualifier) {
     color: grey;
    }

    :global(.cm-s-night-owl
      span.cm-builtin) {
     color: #7ea656;
    }

    /*    :global(.cm-s-night-owl span.cm-bracket) {
                                     color: #ffffff;
                                    }*/

    :global(.cm-s-night-owl
      span.cm-tag) {
     color: #ff6363;
    }

    :global(.cm-s-night-owl
      span.cm-attribute) {
     color: #7f007f;
    }

    :global(.cm-s-night-owl
      span.cm-error) {
     color: #ef5350;
    }

    :global(.cm-s-night-owl
      span.cm-punctuation) {
     color: #ffffff;
    }

    :global(.cm-s-night-owl
      .CodeMirror-cursor) {
     border-left: 1px solid #80a4c2;
    }

    :global(.cm-s-night-owl
      .CodeMirror-gutter) {
     background: #011627;
     color: #d6deeb;
    }

    :global(.cm-s-night-owl
      .CodeMirror-lines) {
     background: #011627;
    }

    :global(.cm-s-night-owl
      .CodeMirror-scroll) {
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

    :global(.cm-s-night-owl
      .CodeMirror-lines) {
     color: #abb2bf;
    }

    :global(.cm-s-night-owl
      .CodeMirror-cursor) {
     border-left: 2px solid #7e57c2 !important;
    }
   `}</style>
  ),
 },
]
