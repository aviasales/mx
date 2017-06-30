# Snapshot report for `packages/mx/test/parser/common.test.js`

The actual snapshot is saved in `common.test.js.snap`.

Generated by [AVA](https://ava.li).

## ignore empty lines

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [],
          children: [
            ElementNode {
              attributes: [],
              children: [
                ElementNode {
                  attributes: [],
                  children: [],
                  loc: SourceLocation {
                    end: Position {
                      column: 0,
                      line: 5,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 4,
                      line: 4,
                    },
                  },
                  name: 'h1',
                  type: 'Element',
                },
              ],
              loc: SourceLocation {
                end: Position {
                  column: 2,
                  line: 6,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 2,
                },
              },
              name: 'div',
              type: 'Element',
            },
            ElementNode {
              attributes: [],
              children: [],
              loc: SourceLocation {
                end: Position {
                  column: 0,
                  line: 7,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 6,
                },
              },
              name: 'footer',
              type: 'Element',
            },
          ],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 7,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'body',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 7,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse attributes

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [
            AttributeNode {
              loc: SourceLocation {
                end: Position {
                  column: 13,
                  line: 1,
                },
                source: 'file.mx',
                start: Position {
                  column: 3,
                  line: 1,
                },
              },
              name: 'id',
              type: 'Attribute',
              value: LiteralNode {
                loc: SourceLocation {
                  end: Position {
                    column: 13,
                    line: 1,
                  },
                  source: 'file.mx',
                  start: Position {
                    column: 7,
                    line: 1,
                  },
                },
                type: 'Literal',
                value: '"code"',
              },
            },
            AttributeNode {
              loc: SourceLocation {
                end: Position {
                  column: 26,
                  line: 1,
                },
                source: 'file.mx',
                start: Position {
                  column: 13,
                  line: 1,
                },
              },
              name: 'class',
              type: 'Attribute',
              value: LiteralNode {
                loc: SourceLocation {
                  end: Position {
                    column: 26,
                    line: 1,
                  },
                  source: 'file.mx',
                  start: Position {
                    column: 20,
                    line: 1,
                  },
                },
                type: 'Literal',
                value: '"cool"',
              },
            },
          ],
          children: [],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 2,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'div',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 2,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse attributes with children

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [
            AttributeNode {
              loc: SourceLocation {
                end: Position {
                  column: 13,
                  line: 1,
                },
                source: 'file.mx',
                start: Position {
                  column: 3,
                  line: 1,
                },
              },
              name: 'id',
              type: 'Attribute',
              value: LiteralNode {
                loc: SourceLocation {
                  end: Position {
                    column: 13,
                    line: 1,
                  },
                  source: 'file.mx',
                  start: Position {
                    column: 7,
                    line: 1,
                  },
                },
                type: 'Literal',
                value: '"code"',
              },
            },
          ],
          children: [
            ElementNode {
              attributes: [],
              children: [],
              loc: SourceLocation {
                end: Position {
                  column: 0,
                  line: 3,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 2,
                },
              },
              name: 'p',
              type: 'Element',
            },
          ],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 3,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'div',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 3,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse attributes with content

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [
            AttributeNode {
              loc: SourceLocation {
                end: Position {
                  column: 14,
                  line: 1,
                },
                source: 'file.mx',
                start: Position {
                  column: 3,
                  line: 1,
                },
              },
              name: 'class',
              type: 'Attribute',
              value: LiteralNode {
                loc: SourceLocation {
                  end: Position {
                    column: 14,
                    line: 1,
                  },
                  source: 'file.mx',
                  start: Position {
                    column: 10,
                    line: 1,
                  },
                },
                type: 'Literal',
                value: '"hi"',
              },
            },
          ],
          children: [
            LiteralNode {
              loc: SourceLocation {
                end: Position {
                  column: 26,
                  line: 1,
                },
                source: 'file.mx',
                start: Position {
                  column: 14,
                  line: 1,
                },
              },
              type: 'Literal',
              value: '" Hello world"',
            },
            LiteralNode {
              loc: SourceLocation {
                end: Position {
                  column: 27,
                  line: 1,
                },
                source: 'file.mx',
                start: Position {
                  column: 26,
                  line: 1,
                },
              },
              type: 'Literal',
              value: '"!"',
            },
          ],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 2,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'div',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 2,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse complex selector

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [],
          children: [],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 2,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: '#id.class-name',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 2,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse complex selector with dot on end

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [],
          children: [
            TextNode {
              children: [
                LiteralNode {
                  loc: SourceLocation {
                    end: Position {
                      column: 41,
                      line: 2,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 0,
                      line: 2,
                    },
                  },
                  type: 'Literal',
                  value: '"  Please don\'t use this king of syntax 😉"',
                },
                LiteralNode {
                  loc: SourceLocation {
                    end: Position {
                      column: 0,
                      line: 3,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 41,
                      line: 2,
                    },
                  },
                  type: 'Literal',
                  value: '"\\n"',
                },
              ],
              loc: SourceLocation {
                end: Position {
                  column: 0,
                  line: 3,
                },
                source: 'file.mx',
                start: Position {
                  column: 0,
                  line: 2,
                },
              },
              type: 'Text',
            },
          ],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 3,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: '.intro',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 3,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse indent and dedent

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [],
          children: [
            ElementNode {
              attributes: [],
              children: [
                ElementNode {
                  attributes: [],
                  children: [],
                  loc: SourceLocation {
                    end: Position {
                      column: 0,
                      line: 4,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 4,
                      line: 3,
                    },
                  },
                  name: 'h1',
                  type: 'Element',
                },
              ],
              loc: SourceLocation {
                end: Position {
                  column: 2,
                  line: 4,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 2,
                },
              },
              name: 'header',
              type: 'Element',
            },
            ElementNode {
              attributes: [],
              children: [
                ElementNode {
                  attributes: [],
                  children: [],
                  loc: SourceLocation {
                    end: Position {
                      column: 0,
                      line: 6,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 4,
                      line: 5,
                    },
                  },
                  name: 'div',
                  type: 'Element',
                },
                ElementNode {
                  attributes: [],
                  children: [],
                  loc: SourceLocation {
                    end: Position {
                      column: 0,
                      line: 7,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 4,
                      line: 6,
                    },
                  },
                  name: 'p',
                  type: 'Element',
                },
              ],
              loc: SourceLocation {
                end: Position {
                  column: 2,
                  line: 7,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 4,
                },
              },
              name: 'section',
              type: 'Element',
            },
            ElementNode {
              attributes: [],
              children: [],
              loc: SourceLocation {
                end: Position {
                  column: 0,
                  line: 8,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 7,
                },
              },
              name: 'footer',
              type: 'Element',
            },
          ],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 8,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'body',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 8,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse interpolation

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [],
          children: [
            ElementNode {
              attributes: [],
              children: [
                LiteralNode {
                  loc: SourceLocation {
                    end: Position {
                      column: 9,
                      line: 2,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 3,
                      line: 2,
                    },
                  },
                  type: 'Literal',
                  value: '" Hello"',
                },
                LiteralNode {
                  loc: SourceLocation {
                    end: Position {
                      column: 11,
                      line: 2,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 9,
                      line: 2,
                    },
                  },
                  type: 'Literal',
                  value: '", "',
                },
                ExpressionNode {
                  expression: IdentifierNode {
                    loc: SourceLocation {
                      end: Position {
                        column: 16,
                        line: 2,
                      },
                      source: 'file.mx',
                      start: Position {
                        column: 12,
                        line: 2,
                      },
                    },
                    name: 'name',
                    type: 'Identifier',
                  },
                  loc: SourceLocation {
                    end: Position {
                      column: 17,
                      line: 2,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 11,
                      line: 2,
                    },
                  },
                  type: 'Expression',
                },
              ],
              loc: SourceLocation {
                end: Position {
                  column: 0,
                  line: 3,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 2,
                },
              },
              name: 'p',
              type: 'Element',
            },
            TextNode {
              children: [
                LiteralNode {
                  loc: SourceLocation {
                    end: Position {
                      column: 15,
                      line: 3,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 3,
                      line: 3,
                    },
                  },
                  type: 'Literal',
                  value: '" My name is "',
                },
                ExpressionNode {
                  expression: IdentifierNode {
                    loc: SourceLocation {
                      end: Position {
                        column: 20,
                        line: 3,
                      },
                      source: 'file.mx',
                      start: Position {
                        column: 16,
                        line: 3,
                      },
                    },
                    name: 'name',
                    type: 'Identifier',
                  },
                  loc: SourceLocation {
                    end: Position {
                      column: 21,
                      line: 3,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 15,
                      line: 3,
                    },
                  },
                  type: 'Expression',
                },
              ],
              loc: SourceLocation {
                end: Position {
                  column: 0,
                  line: 4,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 3,
                },
              },
              type: 'Text',
            },
          ],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 4,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'div',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 4,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse single and double quotes

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [
            AttributeNode {
              loc: SourceLocation {
                end: Position {
                  column: 17,
                  line: 1,
                },
                source: 'file.mx',
                start: Position {
                  column: 5,
                  line: 1,
                },
              },
              name: 'type',
              type: 'Attribute',
              value: LiteralNode {
                loc: SourceLocation {
                  end: Position {
                    column: 17,
                    line: 1,
                  },
                  source: 'file.mx',
                  start: Position {
                    column: 11,
                    line: 1,
                  },
                },
                type: 'Literal',
                value: '"text"',
              },
            },
            AttributeNode {
              loc: SourceLocation {
                end: Position {
                  column: 31,
                  line: 1,
                },
                source: 'file.mx',
                start: Position {
                  column: 17,
                  line: 1,
                },
              },
              name: 'value',
              type: 'Attribute',
              value: LiteralNode {
                loc: SourceLocation {
                  end: Position {
                    column: 31,
                    line: 1,
                  },
                  source: 'file.mx',
                  start: Position {
                    column: 24,
                    line: 1,
                  },
                },
                type: 'Literal',
                value: '\'value\'',
              },
            },
          ],
          children: [],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 2,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'input',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 2,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse single tag

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [],
          children: [],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 2,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'div',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 2,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse tag with block of text

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [],
          children: [
            ElementNode {
              attributes: [],
              children: [
                TextNode {
                  children: [
                    LiteralNode {
                      loc: SourceLocation {
                        end: Position {
                          column: 21,
                          line: 3,
                        },
                        source: 'file.mx',
                        start: Position {
                          column: 0,
                          line: 3,
                        },
                      },
                      type: 'Literal',
                      value: '"    Beware of dragons"',
                    },
                    LiteralNode {
                      loc: SourceLocation {
                        end: Position {
                          column: 0,
                          line: 5,
                        },
                        source: 'file.mx',
                        start: Position {
                          column: 21,
                          line: 3,
                        },
                      },
                      type: 'Literal',
                      value: '"\\n\\n"',
                    },
                    LiteralNode {
                      loc: SourceLocation {
                        end: Position {
                          column: 41,
                          line: 5,
                        },
                        source: 'file.mx',
                        start: Position {
                          column: 0,
                          line: 5,
                        },
                      },
                      type: 'Literal',
                      value: '"    Dragons are very dangerous creatures,"',
                    },
                    LiteralNode {
                      loc: SourceLocation {
                        end: Position {
                          column: 0,
                          line: 6,
                        },
                        source: 'file.mx',
                        start: Position {
                          column: 41,
                          line: 5,
                        },
                      },
                      type: 'Literal',
                      value: '"\\n"',
                    },
                    LiteralNode {
                      loc: SourceLocation {
                        end: Position {
                          column: 42,
                          line: 6,
                        },
                        source: 'file.mx',
                        start: Position {
                          column: 0,
                          line: 6,
                        },
                      },
                      type: 'Literal',
                      value: '"    They live in a caves in the mountains."',
                    },
                    LiteralNode {
                      loc: SourceLocation {
                        end: Position {
                          column: 0,
                          line: 7,
                        },
                        source: 'file.mx',
                        start: Position {
                          column: 42,
                          line: 6,
                        },
                      },
                      type: 'Literal',
                      value: '"\\n"',
                    },
                  ],
                  loc: SourceLocation {
                    end: Position {
                      column: 0,
                      line: 7,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 0,
                      line: 3,
                    },
                  },
                  type: 'Text',
                },
              ],
              loc: SourceLocation {
                end: Position {
                  column: 0,
                  line: 7,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 2,
                },
              },
              name: 'p',
              type: 'Element',
            },
            ElementNode {
              attributes: [],
              children: [],
              loc: SourceLocation {
                end: Position {
                  column: 0,
                  line: 8,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 7,
                },
              },
              name: 'footer',
              type: 'Element',
            },
          ],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 8,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'div',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 8,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse tag with content

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [],
          children: [
            LiteralNode {
              loc: SourceLocation {
                end: Position {
                  column: 20,
                  line: 1,
                },
                source: 'file.mx',
                start: Position {
                  column: 1,
                  line: 1,
                },
              },
              type: 'Literal',
              value: '" Beware of dragons "',
            },
            LiteralNode {
              loc: SourceLocation {
                end: Position {
                  column: 22,
                  line: 1,
                },
                source: 'file.mx',
                start: Position {
                  column: 20,
                  line: 1,
                },
              },
              type: 'Literal',
              value: '"🔥"',
            },
          ],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 2,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'p',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 2,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }

## parse text tags

> Snapshot 1

    DocumentNode {
      children: [
        ElementNode {
          attributes: [],
          children: [
            TextNode {
              children: [
                LiteralNode {
                  loc: SourceLocation {
                    end: Position {
                      column: 23,
                      line: 2,
                    },
                    source: 'file.mx',
                    start: Position {
                      column: 3,
                      line: 2,
                    },
                  },
                  type: 'Literal',
                  value: '" Here goes some text"',
                },
              ],
              loc: SourceLocation {
                end: Position {
                  column: 0,
                  line: 3,
                },
                source: 'file.mx',
                start: Position {
                  column: 2,
                  line: 2,
                },
              },
              type: 'Text',
            },
          ],
          loc: SourceLocation {
            end: Position {
              column: 0,
              line: 3,
            },
            source: 'file.mx',
            start: Position {
              column: 0,
              line: 1,
            },
          },
          name: 'p',
          type: 'Element',
        },
      ],
      loc: SourceLocation {
        end: Position {
          column: 0,
          line: 3,
        },
        source: 'file.mx',
        start: Position {
          column: 0,
          line: 1,
        },
      },
      type: 'Document',
    }