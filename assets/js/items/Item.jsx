import React, { memo, useCallback, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { usePost } from "../api/websites_api";
import DeleteModal from "../component/DeleteModal";
import FormModal from "../component/FormModal";

const Item = memo(({ item, edit, remove, user }) => {
  const [formModal, setFormModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const toggleEdit = () => setFormModal(!formModal);
  const toggleDelete = () => setDeleteModal(!deleteModal);

  const handleEdit = (newItem) => {
    edit(newItem, item);
  };

  const onDeleteCallback = useCallback(() => {
    remove(item);
  }, [item]);

  const { load: deleteItem, isSaving } = usePost(
    item["@id"],
    "DELETE",
    onDeleteCallback
  );

  const handleDelete = (item) => {
    deleteItem(item);
  };

  return (
    <div
      style={{
        opacity: isSaving ? 0.3 : 1,
      }}
    >
      <Card>
        <CardBody>
          <CardTitle tag="h5">{item.url}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {item.theme.title}
          </CardSubtitle>
          <CardText>{item.comment}</CardText>
        </CardBody>
        {item.author.id === user && (
          <CardFooter className="text-muted">
            <Button onClick={toggleEdit} disabled={isSaving}>
              &#9999;&#65039; edit
            </Button>

            <Button onClick={toggleDelete} disabled={isSaving}>
              &#128465; delete
            </Button>
          </CardFooter>
        )}
      </Card>
      <FormModal
        modal={formModal}
        toggle={toggleEdit}
        onSave={handleEdit}
        item={item}
        user={user}
      />
      <DeleteModal
        modal={deleteModal}
        toggle={toggleDelete}
        onDelete={handleDelete}
        item={item}
      />
    </div>
  );
});

export default Item;
