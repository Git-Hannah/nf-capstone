import React from "react";
import useStore from "../../ions/hooks/store/useStore";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const ExpandMore = styled(props => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const CardExercise = ({ _id: id, name, description, duration, image }) => {
	const [expanded, setExpanded] = React.useState(false);
	const meta = useStore(state => state.meta);
	const setBookmark = useStore(state => state.setBookmark);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActions>
				<Checkbox
					checked={Boolean(meta[id]?.checked)}
					icon={<StarBorderIcon />}
					checkedIcon={<StarIcon />}
					inputProps={{ "aria-label": "controlled" }}
					sx={{marginLeft: "auto"}}
					onChange={event => {
						setBookmark(id, event.target.checked);
					}}
				/>
			</CardActions>
			<CardHeader title={name} />
			<Image src={image} height="50vw" width="80vw" alt="Fixpoint" />
			<CardContent>Time: {duration}</CardContent>
			<CardActions disableSpacing>
				<ExpandMore
					expand={expanded}
					aria-expanded={expanded}
					aria-label="show more"
					onClick={handleExpandClick}
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse unmountOnExit in={expanded} timeout="auto">
				<CardContent>
					<Typography component="div">
						<ReactMarkdown>{description}</ReactMarkdown>
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default CardExercise;
