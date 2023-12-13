import { BtnList } from "../../components/BtnList";
import PropTypes from "prop-types";

export const ChooseCards = ({ data }) => {
	return <BtnList dataList={data} title="Cards" nav="choosecards" />;
};

ChooseCards.propTypes = {
	data: PropTypes.array,
};
