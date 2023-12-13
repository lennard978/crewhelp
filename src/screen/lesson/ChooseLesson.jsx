import { BtnList } from "../../components/BtnList";
import PropTypes from "prop-types";

export const ChooseLesson = ({ data }) => {
	return <BtnList dataList={data} title="Lesson" nav="chooselesson" />;
};

ChooseLesson.propTypes = {
	data: PropTypes.array,
};
