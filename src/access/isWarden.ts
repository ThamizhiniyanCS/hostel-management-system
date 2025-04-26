import type { Access } from 'payload'

export const isParent: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    if (user.collection === 'wardens') {
      return true
    }
  }

  return false
}
