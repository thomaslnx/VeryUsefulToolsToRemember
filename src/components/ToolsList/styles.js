import styled from 'styled-components';
import Highlighter from 'react-highlight-words';

export const Wrapper = styled.div`
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex:
  align-items: center;
  margin-top: 32px;
  width: 100%;
  font-family: 'Source Sans Pro', sans-serif;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;


    .input-container {
      padding: 0;

      span {
        color: #170c3a;
      }

      svg {
        position: relative;
        top: 2px;
        left: 11px;
      }
    }

    .search {
      width: 200px;
      padding: 5px 30px;
      border: 1px solid #dedce1;
      border-radius: 5px;
      font-size: 20px;
      margin-left: -15px;
    }

    .boxcheck {
      margin: 0 10px;
    }

    button {
      width: 100px;
      height: 30px;
      background: #fcd7d6;
      border: 1px solid #fcc6c5;
      border-radius: 5px;
      font-size: 16px;
      color: #f95e5a;
      display: flex;
      justify-content: center;

      svg {
        height: 13px;
        margin: 2px 0 0 2px;
      }
    }
  }
`;

export const ToolList = styled.ul`
  margin-top: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  max-height: 100%;

  ul {
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #feefee;
    border: 1px solid #fcc6c5;
    border-radius: 5px;
    padding: 10px 15px;
    margin-bottom: 20px;

    span {
      margin-bottom: 10px;

      &.toolTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      a {
        text-decoration: none;
        font-weigth: 600;
        font-size: 18px;
      }

      button {
        background: transparent;
        border: none;
        font-size: 14px;

        &:hover {
          color: green;
        }

        svg {
          position: relative;
          top: 3px;
        }
      }
    }
  }

  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #feefee;
    padding: 20px 20px;
    border-radius: 4px;

    .title {
      font-size: 35px;
      color: #170c3a;
      margin-bottom: 10px;
    }
  }
`;

// Styling for lightbox
export const LightBoxWrapper = styled.div`
  dislay: flex;
  flex-direction: column;
  width: 550px;
  height: 550px;
  padding: 20px 20px;
  background: #fcaeac;

  span {
    display: flex;
    align-self: flex-start;

    svg {
      margin-right: 10px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-content: center;
    font-family: 'Source Sans Pro', sans-serif;
    max-height: 100%;
    margin-top: 30px;

    .name,
    .link,
    .description,
    .tags {
      margin-left: 30px;
      margin-bottom: 10px;
    }

    input {
      width: 450px;
      height: 25px;
      background: #f5f4fe;
      border: 1px solid #ebeaed;
      border-radius: 4px;
      padding: 0 10px;
      margin-bottom: 30px;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 16px;
      position: relative;
    }

    textarea {
      background: #f5f4f6;
      height: 90px;
      width: 450px;
      border: 1px solid #ebeaed;
      border-radius: 4px;
      margin-bottom: 20px;
      padding: 5px 10px;
      resize: none;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 16px;
    }

    button {
      position: relative;
      left: 175px;
    }
  }
`;

export const TagHighlighter = styled(Highlighter)`
  .tagHighlighted {
    color: #fff;
    font-weight: bold;
    background: #f95e5a;
  }
`;
