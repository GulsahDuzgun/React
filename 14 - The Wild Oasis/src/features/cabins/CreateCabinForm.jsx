import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import toast from "react-hot-toast";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ cabinToEdit }) {
  const { id: editId, ...defaultEditValues } = cabinToEdit;
  const isEditForm = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditForm ? defaultEditValues : {},
  });
  const queryClient = useQueryClient();
  const { errors } = formState;

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin has been successfully added");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin has been successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const isWorking = isEditing || isCreating;

  function handleFormSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (!isEditForm) createCabin({ ...data, image });
    else
      editCabin({
        newCabinData: { ...data, image },
        id: editId,
      });
  }

  function hadleFormError(errors) {
    console.log(errors);
  }

  const Label = styled.label`
    font-weight: 500;
  `;

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit, hadleFormError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          {...register("name", {
            required: "This field is required",
          })}
          type="text"
          id="name"
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
          disabled={isWorking}
          type="number"
          id="maxCapacity"
        />
      </FormRow>
      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          {...register("regularPrice", {
            required: "This filed is required",
            min: {
              value: 1,
              message: "Price should be at least 1",
            },
          })}
          disabled={isWorking}
          type="number"
          id="regularPrice"
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) => {
              return (
                Number(value) <= Number(getValues().regularPrice) ||
                `Discount should be less than regular price`
              );
            },
          })}
          disabled={isWorking}
        />
      </FormRow>
      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          {...register("description", {
            required: "This field is required",
          })}
          type="text"
          id="description"
          defaultValue=""
          disabled={isWorking}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditForm ? false : "This files is required",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" disabled={isWorking} type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditForm ? "Edit Cabin" : "Create Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
