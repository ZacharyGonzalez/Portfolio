import "./timelineEvent.css";
type TimelineEventProp = {
  desc: string;
};
export default function TimelineEvent({ desc }: TimelineEventProp) {
  return <div className="timeline-event">{desc}</div>;
}
