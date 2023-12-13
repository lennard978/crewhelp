import { BtnList } from "../../components/BtnList";
import PropTypes from "prop-types";

export const ChooseTest = ({ data }) => {
	return <BtnList dataList={data} title="Test" nav="choosetest" />;
};

ChooseTest.propTypes = {
	data: PropTypes.array,
};
