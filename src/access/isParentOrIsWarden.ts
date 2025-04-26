import type { Access } from 'payload'

export const isParentOrWarden: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    if (user.collection === 'parents' || user.collection === 'wardens') {
      return true
    }
  }

  return false
}
