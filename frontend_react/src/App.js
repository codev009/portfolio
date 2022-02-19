import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Work} from './container';
const App = () => {
    return (
            <div className="app">
            <Header />
            <About />
            <Skills />
            <Work />
            <Testimonial />
            <Footer />
            </div>
        );
}

export default App;