import { describe, expect, it, vitest } from 'vitest'
import proxyUrl from '../config'
import { utilAwaitTime, utilDictZh, utilGetLastList, utilGetSuffix, utilObjectFilter, utilPreviewFile } from '~/composables/utils'

describe('utilPreviewFile', () => {
  it('url is result', () => {
    const path1 = '123'
    const path2 = undefined

    expect(utilPreviewFile(path1)).toBe(proxyUrl + path1)
    expect(utilPreviewFile(path2)).toBe('')
  })
})

describe('utilAwaitTime', () => {
  vitest.useFakeTimers()

  it('should wait for the specified time and resolve the promise', async () => {
    const timer = 1000 // 1 second
    const promise = utilAwaitTime(timer)
    vitest.advanceTimersByTime(timer)
    await expect(promise).resolves.toBeUndefined()
  })
})

describe('utilGetLastList', () => {
  it('should flatten multi-level data structures', () => {
    const data = [
      { id: 1, name: 'A', children: [{ id: 2, name: 'B' }] },
      { id: 3, name: 'C', children: [{ id: 4, name: 'D' }, { id: 5, name: 'E' }] },
      { id: 6, name: 'F' },
    ]
    const result = utilGetLastList(data, 'children')
    expect(result).toEqual([
      { id: 2, name: 'B' },
      { id: 4, name: 'D' },
      { id: 5, name: 'E' },
      { id: 6, name: 'F' },
    ])
  })

  it('should handle empty input', () => {
    const data: any[] = []
    const result = utilGetLastList(data, 'children')
    expect(result).toEqual([])
  })

  it('should handle input with no children', () => {
    const data = [
      { id: 1, name: 'A', children: [] },
      { id: 2, name: 'B' },
    ]
    const result = utilGetLastList(data, 'children')
    expect(result).toEqual([
      { id: 2, name: 'B' },
    ])
  })
})

describe('utilObjectFilter', () => {
  it('should remove null, undefined and empty string properties', () => {
    const obj = {
      name: 'John',
      age: 30,
      email: '',
      address: null,
      phone: undefined,
    }
    const filteredObj = utilObjectFilter(obj)
    expect(filteredObj).toEqual({
      name: 'John',
      age: 30,
    })
  })

  it('should handle empty input', () => {
    const filteredObj = utilObjectFilter({})
    expect(filteredObj).toEqual({})
  })
})

describe('utilDictZh', () => {
  const dict = [
    { label: '苹果', value: 'apple' },
    { label: '香蕉', value: 'banana' },
    { label: '橙子', value: 'orange' },
  ]

  it('should return the Chinese translation of the given value', () => {
    expect(utilDictZh('apple', dict)).toEqual('苹果')
    expect(utilDictZh('banana', dict)).toEqual('香蕉')
    expect(utilDictZh('orange', dict)).toEqual('橙子')
  })

  it('should return an empty string if the value is not found in the dictionary', () => {
    expect(utilDictZh('pear', dict)).toEqual('')
  })

  it('should handle empty input', () => {
    expect(utilDictZh('apple', [])).toEqual('')
  })

  it('should handle readonly input', () => {
    const readonlyDict = Object.freeze(dict)
    expect(utilDictZh('apple', readonlyDict)).toEqual('苹果')
  })

  it('should use the specified zhKey and key', () => {
    const dictWithCode = [
      { code: 'A', name: '苹果', id: 1 },
      { code: 'B', name: '香蕉', id: 2 },
      { code: 'C', name: '橙子', id: 3 },
    ]
    expect(utilDictZh('A', dictWithCode, 'name', 'code')).toEqual('苹果')
    expect(utilDictZh(2, dictWithCode, 'name', 'id')).toEqual('香蕉')
    expect(utilDictZh('id', dictWithCode, 'name', 'code')).toEqual('')
  })
})

describe('utilGetSuffix', () => {
  it('should return the file extension', () => {
    expect(utilGetSuffix('file.txt')).toEqual('txt')
    expect(utilGetSuffix('document.docx')).toEqual('docx')
    expect(utilGetSuffix('image.jpg')).toEqual('jpg')
  })

  it('should return an empty string if there is no file extension', () => {
    expect(utilGetSuffix('filename')).toEqual('')
    expect(utilGetSuffix('path/to/file')).toEqual('')
  })

  it('should handle empty input', () => {
    expect(utilGetSuffix('')).toEqual('')
  })
})
