// 暂时分离一个节点到内存，保留事件和数据
$("p").detach()

.replaceWith( newContent )：用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合

.replaceAll( target ) ：用集合的匹配元素替换每个目标元素

.replaceAll()和.replaceWith()功能类似，但是目标和源相反

.wrap( wrappingElement )：在集合中匹配的每个元素周围包裹一个HTML结构
.unwrap

.wrapAll( wrappingElement )：给集合中匹配的元素增加一个外面包裹HTML结构

.wrapInner( wrappingElement )：给集合中匹配的元素的内部，增加包裹的HTML结构

closest()方法接受一个匹配元素的选择器字符串，从元素本身开始，在DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素

如果想快速查找指定元素集合中每一个元素的同辈元素，此时可以用siblings()方法

-------------------------------------------
方法三：$ele.click( [eventData ], handler(eventObject) );

$(selector).hover(handlerIn, handlerOut)

方法一：$ele.focusin()
方法一：$ele.focusout()
--------
方法二：$ele.select( handler(eventObject) )

绑定$ele元素，每次$ele元素触发点击操作会执行回调 handler函数
select事件只能用于<input>元素与<textarea>元素

-----------------------------------------
keypress事件与keydown和keyup的主要区别

只能捕获单个字符，不能捕获组合键
无法响应系统功能键（如delete，backspace）
不区分小键盘和主键盘的数字字符
------------------------------------
$("div").on("click","p",fn)

$("elem").off() //删除所有事件

------------------------------------------------------
    <h3>事件委托，通过事件对象区别触发元素</h3>
    <div class="left">
        <div class="aaron">
            <ul>
                <li>点击：触发一</li>
                <li>点击：触发二</li>
                <li>点击：触发三</li>
                <li>点击：触发四</li>
            </ul>
        </div>
    </div>

    <script type="text/javascript">
        //多事件绑定一
        $("ul").on('click',function(e){
           alert('触发的元素是内容是: ' + e.target.textContent)
        })
    </script>
    http://www.imooc.com/code/10048

----------------------------------------------
$('#elem').on('Aaron', function(event,arg1,arg2) {
    alert("自触自定义时间")
 });
$('#elem').trigger('Aaron',['参数1','参数2'])
triggerHandler