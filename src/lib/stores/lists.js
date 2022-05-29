import { derived, writable } from 'svelte/store'
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
    addExpense: (listId, { amount, purpose }) =>
      update(prev => ({
        ...prev,
        [listId]: {
          ...prev[listId],
          expenses: [
            ...(prev[listId]?.expenses || []),
            { date: Date.now(), amount, purpose }
          ]
        }
      })),
    deleteExpense: (listId, expenseDate) =>
      update(prev => ({
        ...prev,
        [listId]: {
          ...prev[listId],
          expenses: prev[listId].expenses.filter(
            item => item.date !== expenseDate
          )
        }
      })),
    clearExpenses: listId =>
      update(prev => ({
        ...prev,
        [listId]: {
          ...prev[listId],
          expenses: []
        }
      }))
  }
}

export const lists = createListsStore()
export const selectedList = derived(lists, $lists =>
  Object.values($lists).find(({ selected }) => selected)
)
export const selectedListId = derived(selectedList, list => list?.listId)
export const selectedListExpenses = derived(
  selectedList,
  list => list?.expenses
)
export const selectedListExpensesSortedByNew = derived(
  selectedListExpenses,
  list => list?.sort((a, b) => b?.date - a?.date)
)
export const sum = derived(selectedListExpenses, expenses =>
  expenses?.reduce((prev, { amount }) => prev + amount, 0)
)
export const participant = derived(selectedList, list => list?.participant)

if (browser) {
  lists.subscribe(value => localStorage.setItem('lists', JSON.stringify(value)))
}
