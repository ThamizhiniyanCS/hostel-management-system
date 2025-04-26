import type { Access } from 'payload'

const isUserOrIsParentOrIsWarden: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    if (
      user.collection === 'parents' ||
      user.collection === 'wardens' ||
      user.collection === 'users'
    ) {
      return true
    }
  }

  return false
}

export default isUserOrIsParentOrIsWarden
