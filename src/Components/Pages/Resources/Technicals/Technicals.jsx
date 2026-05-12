import React, { useState, useEffect } from 'react'
import "./Technicals.scss"
import { Helmet } from "react-helmet";

const Technicals = () => {


    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    const faqData = [
        {
            question: 'If family members or house guests have recurrent incidents of gastro-intestinal illness',
            answer: 'Coliform Bacteria, Nitrates, Sulphates',
        },
        {
            question: 'If stains are due to plumbing fixtures and in laundry',
            answer: 'Iron, Manganese, Copper, Total Hardness, Calcium',
        },
        {
            question: 'If water has objectionable taste or smell',
            answer: 'Sulphates, PH, Corrosion index, Copper, Lead, Iron, Zinc, Sodium, Chloride, TDS',
        },
        {
            question: 'If pipes or plumbing show signs of corrosion',
            answer: 'Corrosion Index, PH, Lead, Iron, Manganese, Copper, Zinc',
        },
        {
            question: 'If water leaves scaly residue and soap scum',
            answer: 'Hardness, TDS',
        },
        {
            question: 'Efficacy of your softener',
            answer: 'Total Hardness, Calcium, Manganese, Iron, Sodium',
        },
        {
            question: 'Efficacy of your water purifier',
            answer: 'Coliform, E-coli, Turbidity, Residual Free Chlorine',
        },
        {
            question: 'Efficacy of your RO plant',
            answer: 'TDS, PH, Calcium, Magnesium, Chlorides, Sulphates, Silica, Iron, Nitrates, Alkalinity, Coliform, E-coli',
        },
        {
            question: 'If buying a home and wish to assess the quality of existing water supply',
            answer: 'Coliform Bacteria, TDS, Total Hardness, Chlorides, PH, Sulphates, Lead, Iron, Nitrates, Corrosion Index',
        },
        {
            question: 'If a baby is expected in the household',
            answer: 'Coliform Bacteria, TDS, Nitrates, Lead',
        },
        {
            question: 'If you are located near a dump, polluting industry, landfill or dry cleaning operation',
            answer: 'PH, TDS, Chloride, Sulphates, Metals, Coliform Bacteria',
        },
        {
            question: 'If you are located near an area of intensive agricultural use',
            answer: 'Pesticides, Coliform Bacteria, Nitrates, PH, TDS',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div>
            <Helmet>
                <title>Frequently Asked Questions | Quality Analyst and Labs Pvt. Ltd.</title>
                <meta name="description" content="Explore the most commonly asked questions about our services and solutions. Find answers to key concerns related to our quality analysis and laboratory services." />
                <meta name="keywords" content="FAQ, Frequently Asked Questions, Quality Analyst, Laboratory Services, Water Testing, Problem Situations, Eco-Conscious Practices" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Frequently Asked Questions | Quality Analyst and Labs Pvt. Ltd." />
                <meta property="og:description" content="Visit our FAQ section to find answers to the most common questions about our services, including water testing and quality control practices." />
                <meta property="og:image" content="https://qualityanalyst.net/qualityLogo.png" />
                <meta property="og:url" content="https://qualityanalyst.net/faq" />
            </Helmet>

            <div className="faq">
                <div className="circle">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <p className='s'>Do you know what requires your attention when...</p>
                <div className="accordion">
                    <div className="accordion-left">
                        <h3>Problem Situation	</h3>

                        {faqData.map((faq, index) => (
                            <div className="accordion-item" key={index}>
                                <p className="accordion-title"> {faq.question}</p>
                            </div>
                        ))}
                    </div>

                    <div className="accordion-right">
                        <h3>Suspect in Water
                        </h3>
                        {faqData.map((faq, index) => (
                            <div className="accordion-item" key={index}>

                                <p> {faq.answer}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Technicals