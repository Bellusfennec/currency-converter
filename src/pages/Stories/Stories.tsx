import { Title } from "../../components/common/Title";
import { useAppSelector } from "../../store/hooks.ts";
import { getStories } from "../../store/common/stories.slicer.ts";

export const Stories = () => {
  const stories = useAppSelector(getStories());
  return (
    <div>
      <Title tag="h1">История конвертаций</Title>
      <div className="flex flex-col divide-y divide-black/25 mt-20">
        {stories.map((story, index) => (
          <div key={index} className="flex items-center justify-between py-1">
            <div>
              {story.from.value} {story.from.name}
            </div>
            <div>
              {story.to.value} {story.to.name}
            </div>
            <div>{story.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
