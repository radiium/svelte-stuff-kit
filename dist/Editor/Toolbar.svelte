<script>export let direction = 'horizontal';
export let size = 'medium';
</script>

<div class="toolbar {direction} {size} {$$restProps.class || ''}">
	<div class="start">
		<slot name="start" />
	</div>

	<div class="center">
		<slot name="center" />
	</div>

	<div class="end">
		<slot name="end" />
	</div>
</div>

<style>.toolbar {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;
  overflow: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
}
.toolbar.horizontal {
  width: 100%;
  flex-direction: row;
}
.toolbar.horizontal.small {
  height: var(--toolbar-size-s);
  padding: 0 8px;
}
.toolbar.horizontal.medium {
  height: var(--toolbar-size-m);
  padding: 0 10px;
}
.toolbar.horizontal.large {
  height: var(--toolbar-size-l);
  padding: 0 10px;
}
.toolbar.horizontal .start,
.toolbar.horizontal .center,
.toolbar.horizontal .end {
  height: 100%;
  flex-direction: row;
}
.toolbar.vertical {
  height: 100%;
  flex-direction: column;
}
.toolbar.vertical.small {
  width: var(--toolbar-size-s);
  padding: 5px 0;
}
.toolbar.vertical.medium {
  width: var(--toolbar-size-m);
  padding: 10px 0;
}
.toolbar.vertical.large {
  width: var(--toolbar-size-l);
  padding: 10px 0;
}
.toolbar.vertical .start,
.toolbar.vertical .center,
.toolbar.vertical .end {
  width: 100%;
  flex-direction: column;
}
.toolbar .start {
  width: 20%;
  flex-shrink: 0;
  flex-grow: 2;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
}
.toolbar .center {
  width: 60%;
  min-width: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.toolbar .end {
  width: 20%;
  flex-shrink: 0;
  flex-grow: 2;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
}</style>
