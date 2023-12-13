import { BtnList } from "../../components/BtnList";
import PropTypes from "prop-types";

export const ChooseWrite = ({ data }) => {
	return <BtnList dataList={data} title="Write" nav="choosewrite" />;
};

ChooseWrite.propTypes = {
	data: PropTypes.array,
};
