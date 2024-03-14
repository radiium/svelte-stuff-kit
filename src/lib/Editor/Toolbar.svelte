<script lang="ts">
    export let direction: 'horizontal' | 'vertical' = 'horizontal';
    export let size: 'small' | 'medium' | 'large' = 'medium';
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

<style lang="scss">
    .toolbar {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        gap: 10px;
        overflow: hidden;
        flex-shrink: 1;
        flex-grow: 1;
        align-items: center;
        justify-content: space-between;

        &.horizontal {
            width: 100%;
            flex-direction: row;

            &.small {
                height: var(--toolbar-size-s);
                padding: 0 8px;
            }

            &.medium {
                height: var(--toolbar-size-m);
                padding: 0 10px;
            }

            &.large {
                height: var(--toolbar-size-l);
                padding: 0 10px;
            }

            .start,
            .center,
            .end {
                height: 100%;
                flex-direction: row;
            }
        }

        &.vertical {
            height: 100%;
            flex-direction: column;

            &.small {
                width: var(--toolbar-size-s);
                padding: 5px 0;
            }

            &.medium {
                width: var(--toolbar-size-m);
                padding: 10px 0;
            }

            &.large {
                width: var(--toolbar-size-l);
                padding: 10px 0;
            }

            .start,
            .center,
            .end {
                width: 100%;
                flex-direction: column;
            }
        }

        .start {
            width: 20%;
            flex-shrink: 0;
            flex-grow: 2;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-start;
            gap: 5px;
        }

        .center {
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

        .end {
            width: 20%;
            flex-shrink: 0;
            flex-grow: 2;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-end;
            gap: 5px;
        }
    }
</style>
