import styled from 'styled-components';

export const Wrapper = styled.div`
  #hellobar-bar {
    width: 100%;
    margin: 0;
    height: 30px;
    display: table;
    font-size: 17px;
    font-weight: 400;
    padding: 0.33em 0.5em;
    -webkit-font-smoothing: antialiased;
    color: #5c5e60;
    position: inherit;
    background-color: aliceblue;
    box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.15);
  }
  #hellobar-bar.regular {
    height: 30px;
    font-size: 14px;
    padding: 0.2em 0.5em;
  }
  .hb-content-wrapper {
    text-align: center;
    text-align: center;
    position: relative;
    display: table-cell;
    vertical-align: middle;
  }
  .hb-content-wrapper p {
    margin-top: 0;
    margin-bottom: 0;
  }
  .hb-text-wrapper {
    margin-right: 0.67em;
    display: inline-block;
    line-height: 1.3;
  }
  .hb-text-wrapper .hb-headline-text {
    font-size: 1em;
    display: inline-block;
    vertical-align: middle;
  }
  #hellobar-bar .hb-cta {
    display: inline-block;
    vertical-align: middle;
    margin: 5px 0;
    color: #ffffff;
    background-color: darkgrey;
    border-color: darkgrey;
  }
  .hb-cta-button {
    opacity: 1;
    color: #fff;
    display: block;
    cursor: pointer;
    line-height: 1.5;
    max-width: 22.5em;
    text-align: center;
    position: relative;
    border-radius: 3px;
    white-space: nowrap;
    margin: 1.75em auto 0;
    text-decoration: none;
    padding: 0;
    overflow: hidden;
  }
  .hb-cta-button .hb-text-holder {
    border-radius: inherit;
    padding: 5px 15px;
  }
  .hb-close-wrapper {
    display: table-cell;
    width: 1.6em;
  }
  .hb-close-wrapper .icon-close {
    font-size: 14px;
    top: 15px;
    right: 25px;
    width: 15px;
    height: 15px;
    opacity: 0.3;
    color: #000;
    cursor: pointer;
    position: absolute;
    text-align: center;
    line-height: 15px;
    z-index: 1000;
    text-decoration: none;
  }
`;
