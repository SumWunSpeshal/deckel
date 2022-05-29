import { writable } from 'svelte/store'
import { browser } from '$app/env'

const DEFAULT_STORE = {}

function createListsStore() {
  const cache = browser ? localStorage.getItem('lists') : null
  const { subscribe, update } = writable(
    cache ? JSON.parse(cache) : DEFAULT_STORE
  )

  return {
    subscribe,
    createList: name =>
      update(prev => ({
        ...prev,
        [Object.keys(prev).length + 1]: {
          listId: Object.keys(prev).length + 1,
          selected: !Object.keys(prev).length,
          participant: name,
          expenses: []
        }
      })),
    selectList: listId =>
      update(prev =>
        Object.entries(prev).reduce(
          (acc, [currId, curr]) => ({
            ...acc,
            [currId]: {
              ...curr,
              selected: listId === currId
            }
          }),
          {}
        )
      ),
    updateListName: (listId, participant) =>
      update(prev => ({
        ...prev,
        [listId]: {
          listId,
          selected: prev[listId].selected,
          participant,
          expenses: [...prev[listId].expenses]
        }
      })),
    deleteList: listId =>
      update(prev => {
        delete prev[listId]
        return prev
      }),
    addExpense: (listId, { date, amount, lending, purpose }) =>
      update(prev => ({
        ...prev,
        [listId]: {
          listId: prev[listId].listId,
          participant: prev[listId].participant,
          expenses: [
            ...prev[listId].expenses,
            { date, amount, lending, purpose }
          ]
        }
      })),
    deleteExpense: (listId, expenseDate) =>
      update(prev => ({
        ...prev,
        [listId]: {
          listId: prev[listId].listId,
          participant: prev[listId].participant,
          expenses: prev[listId].expenses.filter(
            item => item.date !== expenseDate
          )
        }
      })),
    clearExpenses: listId =>
      update(prev => ({
        ...prev,
        [listId]: {
          listId: prev[listId].listId,
          participant: prev[listId].participant,
          expenses: []
        }
      }))
  }
}

export const lists = createListsStore()

if (browser) {
  lists.subscribe(value => localStorage.setItem('lists', JSON.stringify(value)))
}
