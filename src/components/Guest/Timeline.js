import { useState } from 'react';
import { MdSchool, MdAdd, MdStar, MdPersonPinCircle } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import Notify from './../Notifications/notify'

const dataExamples = [
    {
        id: 0,
        props: {
            date: '1990-present',
            dateClassName: 'style-date',
            className: 'vertical-timeline-element',
            contentStyle: {
                backgroundColor: '#dcc48eff', color: '#000', boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
            },
            contentArrowStyle: { borderRight: '7px solid #dcc48eff' },
            iconStyle: { background: 'linear-gradient(315deg, #e0d2b4 0%, #e2ac6b 74%)', color: '#fff' },
            icon: <MdPersonPinCircle />,
        },
        title: 'In the beginning...',
        subtitle: 'Born and raised in RI.',
        content:
            'Born in Providence, RI. Enjoys going to the beach, music, and loves animals.'

    },
    {
        id: 1,
        props: {
            date: '2018-2020',
            dateClassName: 'style-date',
            className: 'vertical-timeline-element',
            contentStyle: {
                backgroundColor: '#b3c0a4ff', color: '#000', boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
            },
            contentArrowStyle: { borderRight: '7px solid  #b3c0a4ff' },
            iconStyle: { background: 'linear-gradient(315deg, #e0d2b4 0%, #e2ac6b 74%)', color: '#fff' },
            icon: <MdSchool />,
        },
        title: 'Education',
        subtitle: "Associate's degree, Web Design and Development",
        content:
            'Completed'
    },
    {
        id: 2,
        props: {
            date: '2018-2021',
            dateClassName: 'style-date',
            className: 'vertical-timeline-element',
            contentStyle: {
                backgroundColor: '#b3c0a4ff', color: '#000', boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)'
            },
            contentArrowStyle: { borderRight: '7px solid  #b3c0a4ff' },
            iconStyle: { background: 'linear-gradient(315deg, #e0d2b4 0%, #e2ac6b 74%)', color: '#fff' },
            icon: <MdSchool />,
        },
        title: 'Education',
        subtitle: 'November 2021.',
        content:
            'Hope to graduate by 2021 with a BS degree of Technology.'
    },
];

const Timeline = () => {
    const [elements, setElements] = useState([]);

    const loadMore = (e) => {
        e.preventDefault()

        for (let i = 0; i < dataExamples.length; i++) {
            if (elements.length === 0) {
                setElements([...elements, dataExamples[0]])
                console.log(elements)
                return getTimelineElements()
            }
            else if (dataExamples[i].id !== elements[elements.length - 1].id && i > 0) {
                setElements([...elements, dataExamples[i]])
                return getTimelineElements()
            }
        }
    };
    const endLoad = () => {
        return alert("End of List!")
    }
    const addButton = () => (
        <MdAdd />
    );
    const showStar = () => (
        <MdStar />
    );
    const getTimelineElements = () =>

        elements.map(element => (
            <>
                <VerticalTimelineElement {...element.props} >

                    <h4 className="vertical-timeline-element-title">{element.title}</h4>
                    <h3 className="vertical-timeline-element-subtitle">
                        {element.subtitle}
                    </h3>
                    <p>{element.content}</p>

                </VerticalTimelineElement>
            </>
        ));

    return (
        <>
            <div>
                <VerticalTimeline>
                    {getTimelineElements()}
                    <VerticalTimelineElement
                        iconOnClick={elements.length === 3 ? endLoad : loadMore}
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        iconClassName="vertical-timeline-element-icon--button"
                        icon={elements.length === 3 ? showStar() : addButton()}
                    />
                </VerticalTimeline>
                <div id="arrow"></div>

            </div>
        </>
    );
};

export default Timeline;