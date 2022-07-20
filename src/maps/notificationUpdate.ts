import { NotificationUpdateRequest } from '@/models/api/NotificationUpdateRequest'
import { NotificationUpdate } from '@/models/NotificationUpdate'
import { MapFunction } from '@/services/Mapper'
import { titleCase } from '@/utilities'

const convertArrayToTitleCase = (array: string[]): string[] => array.map((stateName: string) => titleCase(stateName))

export const mapNotificationUpdateToNotificationUpdateRequest: MapFunction<NotificationUpdate, NotificationUpdateRequest> = function(source: NotificationUpdate): NotificationUpdateRequest {
  return {
    /* eslint-disable camelcase */
    state_names: source.stateNames ? convertArrayToTitleCase(source.stateNames) : undefined,
    tags: source.tags,
    is_active: source.isActive,
    block_document_id: source.blockDocumentId,
  }
}