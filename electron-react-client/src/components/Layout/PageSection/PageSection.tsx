import React from 'react';

const PageSection = (props: any) => {
    return (
        <div className="container">
            <section className="section">
                <div className="columns">{props.children}</div>
            </section>
        </div>
    );
};

export default PageSection;
