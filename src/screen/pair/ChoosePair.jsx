import { BtnList } from "../../components/BtnList";
import PropTypes from "prop-types";

export const ChoosePair = ({ data }) => {
	return <BtnList dataList={data} title="Pair" nav="choosepair" />;
};

ChoosePair.propTypes = {
	data: PropTypes.array,
};
