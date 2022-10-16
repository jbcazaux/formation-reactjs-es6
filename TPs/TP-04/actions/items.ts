import Item from '../domain/Item'

export type ItemsAction = {
  type: string
  items: ReadonlyArray<Item>
}

// TODO: Ecrire un 'action creator' qui prend en parametre la liste des items et qui retourne
// une action redux (ItemsAction)
export const setItems = null