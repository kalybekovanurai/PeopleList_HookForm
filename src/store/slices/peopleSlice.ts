import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Person {
  id: number;
  name: string;
  age: string;
  gender: string;
}

interface PeopleState {
  list: Person[];
}

const initialState: PeopleState = {
  list: [{ id: 1, name: "Асан", age: "22", gender: "Мужчина" }],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.list.push(action.payload);
    },
    editPerson: (state, action: PayloadAction<Person>) => {
      const person = state.list.find((p) => p.id === action.payload.id);
      if (person) {
        person.name = action.payload.name;
        person.age = action.payload.age;
        person.gender = action.payload.gender;
      }
    },
  },
});

export const { addPerson, editPerson } = peopleSlice.actions;
export default peopleSlice.reducer;
