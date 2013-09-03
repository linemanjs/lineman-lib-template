(->
  root = this
  _ = root._ || require('underscore')

  root.sumTo = (n) ->
    _([1..n]).inject (sum, i) ->
      sum + i
    , 0
)()
