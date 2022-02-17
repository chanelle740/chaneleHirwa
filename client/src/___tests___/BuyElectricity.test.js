import { render, screen } from '@testing-library/react';
import GetToken from "../views/GetToken";

test('Buy Electricty page', () => {
    render(<>
        <GetToken/>
    </>);
    
    const linkElement = screen.getByText(/Buy Electricty/i);
    
    console.log(linkElement)
    expect(linkElement).toBeInTheDocument();
});