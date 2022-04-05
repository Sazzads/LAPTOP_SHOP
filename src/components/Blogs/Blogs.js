import React from 'react';

const Blogs = () => {
    return (
        <section className='bg-stone-600 p-6'>
            <h1 className='font-bold text-6xl text-white text-center'>Question's Answer:</h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen items-center gap-4 text-white'>
                <article className="border h-100 p-7 mx-4">
                    <h2 className='text-3xl font-semibold mb-3'>1.What is Context Api?</h2>
                    <p>A React app can use the React Context API to generate global variables that can be passed around. This is an alternative to "prop drilling," which entails passing props from grandparent to child to parent and so on. Context is also marketed as a simpler, lighter way to Redux state management.

                        Context API is a (sort of) new feature in React 16.3 that allows you to easily and lightly communicate state across the entire project (or part of it).that allows you.</p>
                </article>
                <article className="border h-100 p-7 mx-4">
                    <h2 className='text-3xl font-semibold mb-3'>2.What is Sementic Tag ?</h2>
                    <p>Semantic HTML, also known as semantic markup, is HTML that adds meaning to a web page rather than merely making it look pretty. A p tag, for
                        example, denotes that the contained text is a paragraph. Because people understand what paragraphs are and how to display them, this is both semantic and presentational. Because people understand what paragraphs are and how to display them</p>
                </article>

                <article className="border h-100 p-7 mx-4">
                    <h2 className='text-3xl font-semibold mb-3'>3. what is the difference between inline vs inline-block vs block element?</h2>
                    <p>
                        You can't change the width or height of the element, and it doesn't start on a new line.

                        It has the same formatting as the inline element, but you can customize the width and height.

                        The element will begin on a new line and fill the entire page. You may also customize the width and height.
                    </p>
                </article>
            </div>

        </section>
    );
};

export default Blogs;