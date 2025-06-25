import "./Timeline.css";

interface TimelineItem {
  date: string;
  description: string | string[];
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

export default function Timeline({ title, items }: TimelineProps) {
  return (
    <div className="CV-history">
      <h2>{title}</h2>
      <div className="CV-timeline">
        {items.map((item, index) => (
          <div key={index}>
            <h3>{item.date}</h3>
            {Array.isArray(item.description) ? (
              <p>
                {item.description.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            ) : (
              <p>{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
