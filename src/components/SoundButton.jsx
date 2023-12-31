import { useSpeechSynthesis } from "react-speech-kit";
import PropTypes from "prop-types";

export default function SoundButton({ children, german, className }) {
	const { speak, voices } = useSpeechSynthesis();
	const voice = voices.find(({ lang }) => lang.startsWith("de"));
	return (
		<div
			className={className}
			onClick={() => speak({ rate: 0.6, pitch: 0, voice, text: german })}
		>
			{children}
		</div>
	);
}

SoundButton.propTypes = {
	children: PropTypes.string,
	german: PropTypes.string,
	className: PropTypes.string,
};
