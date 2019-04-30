/**
 * @param {string} type
 * @return {(o: object) => boolean} type equals o['type']
 */
export const isType = type => o => o.type === type;

/**
 *
 * @param {{type: string}[]} concerns
 * @param {string} type
 * @return {{type: string}[]} concerns with type matching type
 */
export const concernsByType = (concerns, type) => concerns.filter(isType(type));

/**
 * @param {string} id
 * @return {(o: object) => boolean} id !== o['id]
 */
export const isNotId = id => o => o.id !== id;
