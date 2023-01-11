import {
  Button,
} from '@mui/material';

export default function ContainedButton(props) {
  const { live, preview } = props;
  const canEdit = !live && !preview;
  return (
    <Button variant="contained" contentEditable={canEdit}>
      Contained
    </Button>
  );
};
