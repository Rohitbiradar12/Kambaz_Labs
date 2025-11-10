"use client";

import { createSlice } from "@reduxjs/toolkit";
import { modules as seedModules } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  modules: seedModules as any[],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
   
    addModule: (state, { payload: module }: { payload: { name: string; course: string } }) => {
      const newModule = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
        editing: false,
      } as any;
      state.modules = [...state.modules, newModule] as any;
    },
    deleteModule: (state, { payload: moduleId }: { payload: string }) => {
      state.modules = state.modules.filter((m: any) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }: { payload: any }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editModule: (state, { payload: moduleId }: { payload: string }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },

    
    addLesson: (
      state,
      { payload }: { payload: { moduleId: string; name: string } }
    ) => {
      const { moduleId, name } = payload;
      state.modules = state.modules.map((m: any) =>
        m._id !== moduleId
          ? m
          : {
              ...m,
              lessons: [
                ...(m.lessons ?? []),
                { _id: uuidv4(), name, module: moduleId, editing: false },
              ],
            }
      ) as any;
    },

    startEditLesson: (
      state,
      { payload }: { payload: { moduleId: string; lessonId: string } }
    ) => {
      const { moduleId, lessonId } = payload;
      state.modules = state.modules.map((m: any) =>
        m._id !== moduleId
          ? m
          : {
              ...m,
              lessons: (m.lessons ?? []).map((l: any) => ({
                ...l,
                editing: l._id === lessonId,
              })),
            }
      ) as any;
    },

    updateLesson: (
  state,
  { payload }: { payload: { moduleId: string; lessonId: string; name: string } }
) => {
  const { moduleId, lessonId, name } = payload;
  state.modules = state.modules.map((m: any) =>
    m._id !== moduleId
      ? m
      : {
          ...m,
          
          lessons: (m.lessons ?? []).map((l: any) =>
            l._id === lessonId ? { ...l, name } : l
          ),
        }
  ) as any;
},

finishEditLesson: (
  state,
  { payload }: { payload: { moduleId: string; lessonId: string } }
) => {
  const { moduleId, lessonId } = payload;
  state.modules = state.modules.map((m: any) =>
    m._id !== moduleId
      ? m
      : {
          ...m,
          lessons: (m.lessons ?? []).map((l: any) =>
            l._id === lessonId ? { ...l, editing: false } : l
          ),
        }
  ) as any;
},

    cancelEditLesson: (
      state,
      { payload }: { payload: { moduleId: string; lessonId: string } }
    ) => {
      const { moduleId, lessonId } = payload;
      state.modules = state.modules.map((m: any) =>
        m._id !== moduleId
          ? m
          : {
              ...m,
              lessons: (m.lessons ?? []).map((l: any) =>
                l._id === lessonId ? { ...l, editing: false } : l
              ),
            }
      ) as any;
    },

    deleteLesson: (
      state,
      { payload }: { payload: { moduleId: string; lessonId: string } }
    ) => {
      const { moduleId, lessonId } = payload;
      state.modules = state.modules.map((m: any) =>
        m._id !== moduleId
          ? m
          : { ...m, lessons: (m.lessons ?? []).filter((l: any) => l._id !== lessonId) }
      ) as any;
    },
  },
});

export const {
  addModule,
  deleteModule,
  updateModule,
  editModule,
  addLesson,
  startEditLesson,
  updateLesson,
  cancelEditLesson,
  deleteLesson,
  finishEditLesson,
} = modulesSlice.actions;

export default modulesSlice.reducer;
