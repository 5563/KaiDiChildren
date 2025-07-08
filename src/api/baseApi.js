import { getAction, deleteAction } from '@common/api/index.js'


export const getRoomList = (params) => {
    return getAction('/api/baseInfo/room/List', params)
}
export const deleteRoom = (params) => {
    return deleteAction('/api/baseInfo/room/delete', params)
}
