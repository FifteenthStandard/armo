import SingleDropTarget from "./components/SingleDropTarget";
import MultiDropTarget from "./components/MultiDropTarget";

const dropTarget = function (props, drop, className) {
  if (className === undefined) className = 'drop-target-live';
  const onDragOver = function (ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'copy';
    if (className) ev.target.classList.add(className);
  };
  const onDragLeave = function (ev) {
    if (className) ev.target.classList.remove(className);
  };
  const onDrop = function (ev) {
    ev.preventDefault();
    if (className) ev.target.classList.remove(className);
    drop(ev);
  };

  const { live, picker } = props;
  const canDrop = !live && !picker;

  return canDrop
    ? { onDragOver, onDragLeave, onDrop }
    : {};
}

const editable = function (props) {
  const { live, picker } = props;
  const canEdit = !live && !picker;
  return {
    contentEditable: canEdit
  };
};

const multiDroppable = function (props, ...placeholders) {
  const { live, picker } = props;

  return picker
    ? <>{placeholders}</>
    : <MultiDropTarget live={live} />;
};

const singleDroppable = function (props, placeholder) {
  const { live, picker } = props;

  return picker
    ? placeholder
    : <SingleDropTarget live={live} />;
};

export {
  dropTarget,
  editable,
  multiDroppable,
  singleDroppable,
};