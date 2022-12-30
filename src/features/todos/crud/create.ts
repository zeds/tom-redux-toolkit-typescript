import type { Todo, TodoInput } from '../types';
import { nanoid } from '@reduxjs/toolkit';
//nanoid provides its own type definitions, so you don't need @types/nanoid installed!
import { getCurrentDateTime } from '../utils/date';

export const createTodo = (input: TodoInput): Todo => {
  return {
    id: input.id ?? nanoid(),
    title: input.title,
    body: input.body,
    status: input.status ?? 'waiting',
    createdAt: input.createdAt || getCurrentDateTime(),
    updatedAt: input.updatedAt,
    deletedAt: input.deletedAt,
  };
};