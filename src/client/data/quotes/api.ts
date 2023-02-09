import fetch from 'node-fetch';

export const  getARandomQuote = async (): Promise<Quote> => {
    const response = await fetch('/quotes')

    return await response.json() as Quote;
}
