import React from 'react';
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {  useSelector } from 'react-redux';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { EventAvailable } from '@material-ui/icons';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

const useStyles = makeStyles(() => ({
  root: {
    //backgroundColor: '#FFF',
    position: 'relative',
    marginTop: '56px'
  },
  img: {
    maxWidth: 350,
    maxHeight: 350,
  },
}));

export default withRouter(() => {

  const schedule = useSelector(state => state.fights);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <VerticalTimeline layout="2-columns">
        {
          schedule.map(event => (
            <VerticalTimelineElement
            key={`${event.title.replace(/\s/g, '-')}-${event.date.replace(/\s/g, '-')}`}
              className="vertical-timeline-element--work"
              date={event.date}
              iconStyle={{ background: '#88C0D0', color: '#fff' }}
              icon={<EventAvailable />}
            >
              <h3 className="vertical-timeline-element-title">
                <div dangerouslySetInnerHTML={{__html: event.desc}} />
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {
                  event.img &&
                    <img className={classes.img} src={event.img} alt={event.title} />
                }
                
              </h4>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </div>
  );
});