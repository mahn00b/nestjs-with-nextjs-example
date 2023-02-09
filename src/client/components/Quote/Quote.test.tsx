import { render } from '@testing-library/react';
import Quote from './Quote';

const TEST_DATA =  {
  "quote_id": 0,
  "quote": "Yes, I’d like to speak to your office manager, please. Yes, hello. This is Michael Scott. I am the Regional Manager of Dunder Mifflin Paper Products. Just wanted to talk to you manager-a-manger. All right. Done deal. Thank you very much, sir. You’re a gentleman and a scholar. Oh, I’m sorry. OK. I’m sorry. My mistake. That was a woman I was talking to, so… She had a very low voice. Probably a smoker, so… So that’s the way it’s done.",
  "character": "Michael"
}

const TEST_ID = 'TEST_ID'

describe('Quote Display', () => {
  it('should be defined', () => {
    expect(Quote).toBeDefined()
  })

  it('should render in the dom', () => {
    const { getByTestId } = render(<Quote quote={TEST_DATA} dataTestid={TEST_ID} />);

    expect(getByTestId(TEST_ID)).toBeInTheDocument();
  })

  it('should display the correct quote text', () => {
    const { queryByText } = render(<Quote quote={TEST_DATA} dataTestid={TEST_ID} />);

    expect(queryByText(TEST_DATA.quote)).toBeInTheDocument();
  })

  it('should display the correct character name', () => {
    const { queryByText, container } = render(<Quote quote={TEST_DATA} dataTestid={TEST_ID} />);
    console.log(container.innerHTML)
    expect(queryByText(`by ${TEST_DATA.character}`)).toBeInTheDocument();
  })

  it('should cite the correct character name in the blockquote.', () => {
    const { container } = render(<Quote quote={TEST_DATA} dataTestid={TEST_ID} />);

    const blockQuote = container.querySelector('blockquote')

    expect(blockQuote).toBeInTheDocument();
    expect(blockQuote.getAttribute('cite')).toBe(TEST_DATA.character);
  })
});
